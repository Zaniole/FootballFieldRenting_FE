import React from 'react';
import ProfileUserComponent from '../../components/ProfileUserComponent/ProfileUserComponent';
import { useDispatch, useSelector } from 'react-redux';

const ProfileUserPage = () => {
	const user = useSelector((state) => state.user)
	// const dispatch = useDispatch();
	return (
		<div>
			<ProfileUserComponent user={user} />
		</div>
	);
};

export default ProfileUserPage;
