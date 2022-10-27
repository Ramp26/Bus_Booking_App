package com.collabera.userbookingpro.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.collabera.userbookingpro.dao.UserBookingdao;
import com.collabera.userbookingpro.dao.UserDataDao;
import com.collabera.userbookingpro.dto.UserBookingData;
import com.collabera.userbookingpro.dto.UserData;
import com.collabera.userbookingpro.model.UserBookingResponse;
import com.collabera.userbookingpro.model.UserBookingResponseModel;
import com.collabera.userbookingpro.model.UserResponse;
import com.collabera.userbookingpro.pojo.BusPojo;
import com.collabera.userbookingpro.pojo.ResponseTemplateData;

@Service
public class UserBookingServiceImpl implements UserBookingService{
	
	@Autowired
	private UserBookingdao bookingdao;
	
	@Autowired
	private UserDataDao userDao;
	
	
	@Autowired
	private RestTemplate restTemplate;
	
	
	//getting booking data using booking id
	@Override
	public UserBookingResponseModel getBookingData(int bookId) {
		if (bookId>0) {
			 UserBookingData userBookingData= bookingdao.findBybookId(bookId);
			System.out.println("===>==>"+userBookingData);
			
		
			UserBookingResponseModel bookingResponseModel=new UserBookingResponseModel();
			
			bookingResponseModel.setUserName(userBookingData.getUserData().getUserName());
			bookingResponseModel.setBookId(userBookingData.getBookId());
			bookingResponseModel.setBusId(userBookingData.getBusId());
			bookingResponseModel.setBoardingPoint(userBookingData.getBoardingPoint());
			bookingResponseModel.setDropOf(userBookingData.getDropOf());
			bookingResponseModel.setFromPlace(userBookingData.getFromPlace());
			bookingResponseModel.setGender(userBookingData.getGender());
			bookingResponseModel.setPassengerContactNo(userBookingData.getPassengerContactNo());
			bookingResponseModel.setPassengerName(userBookingData.getPassengerName());
			bookingResponseModel.setSeatNo(userBookingData.getSeatNo());
			bookingResponseModel.setToPlace(userBookingData.getToPlace());
			bookingResponseModel.setTravellingDate(userBookingData.getTravellingDate());
			bookingResponseModel.setUserName(userBookingData.getUserName());
			
			return bookingResponseModel;
		}
		return null;
	}
	
	
	
	
	@Override
	public UserBookingResponse insertData(UserBookingResponseModel bookingData) {
		
		if(bookingData!= null) {
//			UserBookingData bookingData1=bookingdao.findBySeatNo(bookingData.getSeatNo());
//			UserBookingData bookingData2=bookingdao.findByTravellingDate(bookingData.getTravellingDate());
//			List<UserBookingData> bookingData3= bookingdao.findByBusId(bookingData.getBusId());
			
			UserData  data=userDao.findByUserName(bookingData.getUserName());
			 UserBookingData bookingData1=new UserBookingData();
			 bookingData1.setUserData(data);
			 bookingData1.setBookId(bookingData.getBookId());
			 bookingData1.setBusId(bookingData.getBusId());
			 bookingData1.setBoardingPoint(bookingData.getBoardingPoint());
			 bookingData1.setDropOf(bookingData.getDropOf());
			 bookingData1.setFromPlace(bookingData.getFromPlace());
			 bookingData1.setGender(bookingData.getGender());
			 bookingData1.setPassengerContactNo(bookingData.getPassengerContactNo());
			 bookingData1.setPassengerName(bookingData.getPassengerName());
			 bookingData1.setSeatNo(bookingData.getSeatNo());
			 bookingData1.setToPlace(bookingData.getToPlace());
			 bookingData1.setTravellingDate(bookingData.getTravellingDate());
			 bookingData1.setUserName(bookingData.getUserName());
			 
				bookingdao.save(bookingData1);
				 return new UserBookingResponse("Successfully inserted ", null);
			
		
			
			
//			SimpleDateFormat  dateFormat=new SimpleDateFormat("YYYY-MM-dd");
//			String formatted1=dateFormat.format(bookingData.getTravellingDate());
//			
//			
//			
//			for (UserBookingData userBookingData : bookingData3) {
//				
//				String formatted2=dateFormat.format(userBookingData.getTravellingDate());
//				
//				if((userBookingData.getSeatNo()==bookingData.getSeatNo()^formatted2.equals(formatted1))||(userBookingData==null)) {
//					
//					bookingdao.save(bookingData);
//					return true;
//					
//				}
//				
//			}
			
			
		}
		 return new UserBookingResponse("No data found for saving ", null);
	}
	
	



// This is for getting booking data using user contact number
	@Override
	public List<UserBookingResponseModel> getDataUsingContactNo(long userContactNo) {
		if(userContactNo >0) {
			
			UserData data=userDao.findByUserContactNo(userContactNo);
			System.out.println("====>con==>"+data);
			List<UserBookingData> bookingDatas= bookingdao.findByUser(data.getUId());
			List<UserBookingResponseModel> bookingResponseModels=new ArrayList<>();
			
			for (UserBookingData userBookingData : bookingDatas) {
				UserBookingResponseModel bookingResponseModel=new UserBookingResponseModel();
				bookingResponseModel.setUserName(userBookingData.getUserData().getUserName());
				bookingResponseModel.setBookId(userBookingData.getBookId());
				bookingResponseModel.setBusId(userBookingData.getBusId());
				bookingResponseModel.setBoardingPoint(userBookingData.getBoardingPoint());
				bookingResponseModel.setDropOf(userBookingData.getDropOf());
				bookingResponseModel.setFromPlace(userBookingData.getFromPlace());
				bookingResponseModel.setGender(userBookingData.getGender());
				bookingResponseModel.setPassengerContactNo(userBookingData.getPassengerContactNo());
				bookingResponseModel.setPassengerName(userBookingData.getPassengerName());
				bookingResponseModel.setSeatNo(userBookingData.getSeatNo());
				bookingResponseModel.setToPlace(userBookingData.getToPlace());
				bookingResponseModel.setTravellingDate(userBookingData.getTravellingDate());
				bookingResponseModel.setUserName(userBookingData.getUserName());
				
				bookingResponseModels.add(bookingResponseModel);
				
			}
			return (List<UserBookingResponseModel>)bookingResponseModels;
		}
		
		return null;
	}

	
	
	

	
	//micro services
	//using booking id we get bus details and user details and booking details

	@Override
	public ResponseTemplateData getBusData(int id) {
		
		ResponseTemplateData responseTemplateData=new ResponseTemplateData();
		UserBookingData bookingData2=bookingdao.findBybookId(id);
		
		
		BusPojo busPojo=restTemplate.getForObject("http://localhost:8080/getbus/"+bookingData2.getBusId(), BusPojo.class);
		
		responseTemplateData.setBusPojo(busPojo);
		responseTemplateData.setBookingData(bookingData2);
		
		return responseTemplateData;
	}
	
	
	//micro services
		

	@Override
	public List<UserBookingData> getListOfBookingData1(BusPojo busPojo ) {
//		 System.out.println("====>1"+busPojo.getTravellingDate());
//		ResponseTemplateData responseTemplateData1=new ResponseTemplateData();
//		
//		BusPojo busPojo1=restTemplate.getForObject("http://localhost:8080/contact/"+busPojo.getContactNo(), BusPojo.class);
//		
//		System.out.println("====>2"+busPojo1);
//		
//		
//		SimpleDateFormat  dateFormat=new SimpleDateFormat("YYYY-MM-dd");
//		String formatted1=dateFormat.format(busPojo.getTravellingDate());
//		
//		String formatted2=dateFormat.format(busPojo1.getTravellingDate());
//		
//		
//		if(busPojo1.getBusId() ==busPojo.getBusId()&& formatted1.equals(formatted2)) {
//			List<UserBookingData> bookingData3=bookingdao.findByBusId(busPojo.getBusId());
//			System.out.println("====>3"+ bookingData3);
//			 UserBookingData bookingData;
//			List<UserBookingData> datas=new ArrayList<UserBookingData>();
//			
//	
//			
//			for (UserBookingData userBookingData : bookingData3) {
//				System.out.println("====>4"+userBookingData);
//				
//				
//				String formatted=dateFormat.format(userBookingData.getTravellingDate());
//			
//				
//				System.out.println("=====>formatted"+formatted);
//				bookingData =new UserBookingData();
//				System.out.println("=====>"+userBookingData.getTravellingDate());
//				
//				System.out.println("=====>"+busPojo.getTravellingDate());
////				if(userBookingData.getTravellingDate().equals(busPojo.getTravellingDate())) {
//					if(formatted.equals(formatted1)) {
//					
//					bookingData.setBookId(userBookingData.getBookId());
////					bookingData.setUserName(userBookingData.getUserName());
////					bookingData.setUserContactNo(userBookingData.getUserContactNo());
////					bookingData.setUserAddress(userBookingData.getUserAddress());
//					bookingData.setTravellingDate(userBookingData.getTravellingDate());
//					bookingData.setToPlace(userBookingData.getToPlace());
//					bookingData.setFromPlace(userBookingData.getFromPlace());
//					bookingData.setSeatNo(userBookingData.getSeatNo());
//					bookingData.setGender(userBookingData.getGender());
//					bookingData.setDropOf(userBookingData.getDropOf());
//					bookingData.setBusId(userBookingData.getBusId());
//					bookingData.setBoardingPoint(userBookingData.getBoardingPoint());
//					
////					return (List<UserBookingData>) bookingData;
//					datas.add(bookingData);
//					System.out.println("=====>6"+datas);
//				}
//				System.out.println("===>5"+datas);
//				
//				
//			}
//			System.out.println("=====>7"+datas);
//			return (List<UserBookingData>) datas;
//		
//		}
		return null;
			
		
	}
	
	
	
	
	
	
	
	//User work

	@Override
	public UserResponse userReg(UserData data) {
		if(data != null) {
			UserData data2= userDao.findByUserName(data.getUserName());
			UserData data3=userDao.findByUserContactNo(data.getUserContactNo());
			if(data2!=null) {
				return new UserResponse("UserName is already exist",null);
			}else if(data3 != null) {
				return new UserResponse("Contact Number Is already  Present",null);
			}else {
				 userDao.save(data);
				 return new UserResponse("Successfully Registered ",null);
			}
			
		}
		return null;
	}

	@Override
	public UserData getingUserData(UserData data) {
		
		if (data!=null) {
			UserData data2=userDao.findByUserName(data.getUserName());
			UserData data3=userDao.findByUserContactNo(data.getUserContactNo());
			
			if (data2.getUId()==data3.getUId()) {
				
				return data3;	
				
			}
		}
		
		return null;
	}

	@Override
	public UserResponse editUser(UserData data, int uId) {
		  UserData data2=userDao.findByuId(uId);
		  if(data2 != null) {
			  
			  data2.setUserName(data.getUserName());
			  data2.setUserContactNo(data.getUserContactNo());
			  data2.setUserAddress(data.getUserAddress());
			  data2.setGender(data.getGender());
			  userDao.save(data2);
			  return new UserResponse("successfully registerd", null);
			  
		  }
		
		return new UserResponse(" User Id not match", null);
	}

	@Override
	public UserResponse removeUser(int uId) {
		UserData data=userDao.findByuId(uId);
		if(data !=null) {
		userDao.delete(data);
		return new UserResponse("deleted successfully", null);
		}
		return new UserResponse("Id not match", null);	
	}

	@Override
	public List<UserData> getallUsers() {
		
		return userDao.findAll();
	}




}
