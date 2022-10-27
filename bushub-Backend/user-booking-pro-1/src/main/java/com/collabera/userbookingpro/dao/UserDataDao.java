package com.collabera.userbookingpro.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.collabera.userbookingpro.dto.UserBookingData;
import com.collabera.userbookingpro.dto.UserData;

@Repository
public interface UserDataDao extends JpaRepository<UserData, Integer> {

	public  UserData findByuId(int uId);

	public UserData findByUserName(String userName);

	public UserData findByUserContactNo(long userContactNo);

//	public List<UserBookingData> findByuserContactNo(long userContactNo);
	
}
