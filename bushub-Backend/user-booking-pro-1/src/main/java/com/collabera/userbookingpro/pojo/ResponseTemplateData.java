package com.collabera.userbookingpro.pojo;

import com.collabera.userbookingpro.dto.UserBookingData;
import com.collabera.userbookingpro.dto.UserData;

import lombok.Data;

@Data
public class ResponseTemplateData {
	
	private UserBookingData bookingData;
	private UserData userData;
	private BusPojo busPojo;

}
