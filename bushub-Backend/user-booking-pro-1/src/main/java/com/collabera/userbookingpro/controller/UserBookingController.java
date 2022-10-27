package com.collabera.userbookingpro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.userbookingpro.dto.UserBookingData;
import com.collabera.userbookingpro.dto.UserData;
import com.collabera.userbookingpro.model.UserBookingResponse;
import com.collabera.userbookingpro.model.UserBookingResponseModel;
import com.collabera.userbookingpro.model.UserResponse;
import com.collabera.userbookingpro.pojo.BusPojo;
import com.collabera.userbookingpro.pojo.ResponseTemplateData;
import com.collabera.userbookingpro.service.UserBookingService;

@RestController
public class UserBookingController {

	@Autowired
	private UserBookingService service;

	// User Booking work

	//Booking data insert booking data
	@PostMapping("/newuser")
	public ResponseEntity<?> newBooking(@RequestBody UserBookingResponseModel bookingData) {

		try {
			UserBookingResponse data = service.insertData(bookingData);

			return new ResponseEntity<UserBookingResponse>(data, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<String>("Something went wrong", HttpStatus.OK);
		}

	}

	// getting list of data using usercontactNo number

	@GetMapping("/con/{userContactNo}")

	public ResponseEntity<?> getData1(@PathVariable long userContactNo) {

		try {
			List<UserBookingResponseModel> bookingData = service.getDataUsingContactNo(userContactNo);

			return new ResponseEntity<List<UserBookingResponseModel>>(bookingData, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("wrong number", HttpStatus.OK);
		}

	}

	
	//getting booking data using booking id
	@GetMapping("/{bookId}")
	
	private ResponseEntity<?> getBusData(@PathVariable int bookId) {
		
		try {
			UserBookingResponseModel data=service.getBookingData(bookId);
			
			return new ResponseEntity<UserBookingResponseModel>(data, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("Id not match", HttpStatus.OK);
		}
		
	}

	// microservices implementations
	// using booking Id
	@GetMapping("/micro/{bookId}")
	public ResponseEntity<?> getData(@PathVariable int bookId) {

		try {
//		UserBookingData data = service.getdata(id);
			ResponseTemplateData data = service.getBusData(bookId);

			return new ResponseEntity<ResponseTemplateData>(data, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("id not match", HttpStatus.OK);
		}

	}

	@PostMapping("/micro/drivercontact")
	public UserBookingResponse getListData(@RequestBody BusPojo busPojo) {
		System.out.println(busPojo);

		System.out.println("=====>11" + busPojo.getTravellingDate());
		System.out.println("=====>12" + busPojo.getContactNo());
		System.out.println("=====>13" + busPojo.getBusId());

		try {
			List<UserBookingData> data1 = service.getListOfBookingData1(busPojo);

			return new UserBookingResponse("this is  Booking  data", data1);
		} catch (Exception e) {

			return new UserBookingResponse("invalid contact  number or BusId", null);
		}

	}

//User work
	@PostMapping("/user/reg")
	public ResponseEntity<?> userReg(@RequestBody UserData data) {

		try {
			UserResponse data2 = service.userReg(data);
			return new ResponseEntity<UserResponse>(data2, HttpStatus.OK);
		} catch (Exception e) {

			return new ResponseEntity<String>("something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);

		}

	}

	@PostMapping("/user/get")
	public ResponseEntity<?> getingUserData(@RequestBody UserData data) {

		try {
			UserData data2 = service.getingUserData(data);

			return new ResponseEntity<UserData>(data2, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("Invalid Credentials", HttpStatus.OK);
		}

	}

	@PutMapping("/user/update/{uId}")

	private ResponseEntity<?> editUser(@RequestBody UserData data, @PathVariable int uId) {

		try {
			UserResponse response = service.editUser(data, uId);
			return new ResponseEntity<UserResponse>(response, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("Something went wrong", HttpStatus.OK);
		}

	}

	@DeleteMapping("/user/remove/{uId}")
	public ResponseEntity<?> removeUser(@PathVariable int uId) {

		try {
			UserResponse response = service.removeUser(uId);

			return new ResponseEntity<UserResponse>(response, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("something went wrong", HttpStatus.OK);
		}

	}

//get all users

	@GetMapping("/user/alluser")
	public UserResponse allUsers() {
		List<UserData> response = service.getallUsers();
		return new UserResponse("Users Data", response);

	}

}
