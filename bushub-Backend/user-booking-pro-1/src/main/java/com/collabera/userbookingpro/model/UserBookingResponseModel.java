package com.collabera.userbookingpro.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.collabera.userbookingpro.dto.UserData;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserBookingResponseModel {
	

	private int bookId;
	private  String passengerName;
	private long passengerContactNo;
	private String gender;
	private String fromPlace;
	private String toPlace;
	private Date travellingDate;
	private String boardingPoint;
	@Column(name = "dropPalce")
	private String dropOf;
    private int seatNo;
	private int busId;
    private String userName;
    
    
}
