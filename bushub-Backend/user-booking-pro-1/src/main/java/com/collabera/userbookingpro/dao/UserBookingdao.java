package com.collabera.userbookingpro.dao;

import java.sql.Date;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.collabera.userbookingpro.dto.UserBookingData;

@Repository
public interface UserBookingdao extends JpaRepository<UserBookingData, Integer> {
	
	public UserBookingData findBybookId(int id);

	@Query("from UserBookingData where userContactNo= ?1")
	public List<UserBookingData>  findByuserContactNo(long userContactNo);

	@Query("from UserBookingData where seatNo= ?1")
	public UserBookingData findBySeatNo(int seatNo);

//	public List<UserBookingData> findByBusId(int busId);

	
	@Query("from UserBookingData where busId=?1")
	public List<UserBookingData> findByBusId(int busId);

	@Query("from UserBookingData where travellingDate=?1")
	public UserBookingData findByTravellingDate(Date travellingDate);
	
	
	

//	@Query("from UserBookingData where User=?1")
//	public List<UserBookingData> findByUserData(int uId);

//	public List<UserBookingData> findAllById(int uId);
	@Query("from UserBookingData where User=?1")
	public List<UserBookingData> findByUser(int uId);

	

}
