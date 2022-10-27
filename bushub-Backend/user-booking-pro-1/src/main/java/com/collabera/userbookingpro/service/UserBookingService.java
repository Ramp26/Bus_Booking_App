package com.collabera.userbookingpro.service;

import java.util.List;

import com.collabera.userbookingpro.dto.UserBookingData;
import com.collabera.userbookingpro.dto.UserData;
import com.collabera.userbookingpro.model.UserBookingResponse;
import com.collabera.userbookingpro.model.UserBookingResponseModel;
import com.collabera.userbookingpro.model.UserResponse;
import com.collabera.userbookingpro.pojo.BusPojo;
import com.collabera.userbookingpro.pojo.ResponseTemplateData;

public interface UserBookingService {

	UserBookingResponseModel getBookingData(int bookId);

	List<UserBookingResponseModel> getDataUsingContactNo(long userContactNo);

      UserBookingResponse insertData(UserBookingResponseModel bookingData);

	ResponseTemplateData getBusData(int id);

	List<UserBookingData> getListOfBookingData1(BusPojo busPojo);
	
	
	
	//User work

	UserResponse userReg(UserData data);

	UserData getingUserData(UserData data);

	UserResponse editUser(UserData data, int uId);

	UserResponse removeUser(int uId);

	List<UserData> getallUsers();


	





}
