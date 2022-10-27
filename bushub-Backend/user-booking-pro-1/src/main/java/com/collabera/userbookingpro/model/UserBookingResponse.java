package com.collabera.userbookingpro.model;

import java.util.List;


import com.collabera.userbookingpro.dto.UserBookingData;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserBookingResponse {
	
String msg;
List<UserBookingData> userBookingData;

}
