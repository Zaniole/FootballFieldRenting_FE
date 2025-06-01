import dayjs from 'dayjs';
import 'dayjs/locale/vi'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale('vi');
dayjs.extend(isSameOrBefore);
const dateFormat = 'YYYY-MM-DD HH:mm'

export const generateTimeSlots = (startAt, closeAt, durationMinutes = 90) => {
	const slots = [];
	const today = dayjs().format('YYYY-MM-DD');

	let current = dayjs(`${today} ${startAt}`, dateFormat);
	const end = dayjs(`${today} ${closeAt}`, dateFormat);

	while (true) {
		const next = current.add(durationMinutes, 'minute');
		if (next.isAfter(end)) break;

		slots.push({
			label: `${current.format('HH:mm')} - ${next.format('HH:mm')}`,
			value: `${current.format('HH:mm')}-${next.format('HH:mm')}`
		});

		current = next;
	}

	return slots;
};

//Hàm kiểm tra slot time có là giờ đẹp hay không
export const isGoldTimeSlot = (slot) => {
	if (!slot) return false;

	const today = dayjs().format('YYYY-MM-DD');

	const cleaned = slot.replace(/\s+/g, ' ').trim();
	const [startStr, endStr] = cleaned.split('-');
	const start = dayjs(`${today} ${startStr}`, dateFormat);
	const end = dayjs(`${today} ${endStr}`, dateFormat);

	const minStart = dayjs(`${today} 17:00`, dateFormat);
	const maxEnd = dayjs(`${today} 21:00`, dateFormat);

	return (
		start.isSame(minStart) || start.isAfter(minStart)
	) && (
			end.isSame(maxEnd) || end.isBefore(maxEnd)
		);
}

//Hàm tạo 7 ngày tiếp theo
export const generateNext7Days = () => {
	const days = [];
	for (let i = 0; i < 7; i++) {
		const date = dayjs().add(i + 1, 'day');
		days.push({
			label: date.format('dddd - DD/MM/YYYY'),
			value: date.format('YYYY-MM-DD'),
		});
	}
	return days;
};

export const convertToDate = (timeSlot, date) => {
	const [startStr, endStr] = timeSlot.split('-');
	const start = dayjs(`${dayjs(date).format('YYYY-MM-DD')} ${startStr}`, dateFormat).tz('Asia/Ho_Chi_Minh');
	const end = dayjs(`${dayjs(date).format('YYYY-MM-DD')} ${endStr}`, dateFormat).tz('Asia/Ho_Chi_Minh');

	const startTime = start.utc().toISOString();
	const endTime = end.utc().toISOString();
	return { startTime, endTime };
}

export const convertToVietnamTime = (utcTime) => {
	const vietnamTime = dayjs.utc(utcTime).tz('Asia/Ho_Chi_Minh');
	return vietnamTime;
}



