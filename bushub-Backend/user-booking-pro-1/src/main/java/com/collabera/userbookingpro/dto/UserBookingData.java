package com.collabera.userbookingpro.dto;

import java.io.Serializable;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class UserBookingData implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bookId;
	private String userName;
	private  String passengerName;
	private long passengerContactNo;
	private String gender;
	private String fromPlace;
	private String toPlace;
//	  @Temporal(TemporalType.DATE)
	private Date travellingDate;
	private String boardingPoint;
	@Column(name = "dropPalce")
	private String dropOf;

	private int seatNo;
	
	private int busId;
	
	@ManyToOne
	@JoinColumn(name="User")
	private UserData userData;
	
}
