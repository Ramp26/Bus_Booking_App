package com.collabera.userbookingpro.model;

import java.util.List;

import com.collabera.userbookingpro.dto.UserData;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
	
 String msg;
 List<UserData> userData;

}
