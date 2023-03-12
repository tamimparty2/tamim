package wedding.tamim.weddingguest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import wedding.tamim.profileimage.ProfileImage;

@Entity
public class WeddingGuest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String mobileNumber;
	private String attendanceMode;
	private String state;
	private String arrivalDate;
	private boolean assistance;
        @OneToOne
	private ProfileImage profileImage;
	private String testimony;
	private String date;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getAttendanceMode() {
		return attendanceMode;
	}
	public void setAttendanceMode(String attendanceMode) {
		this.attendanceMode = attendanceMode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public boolean isAssistance() {
		return assistance;
	}
	public void setAssistance(boolean assistance) {
		this.assistance = assistance;
	}
	public ProfileImage getProfileImage() {
		return profileImage;
	}
	public void setProfileImage(ProfileImage profileImage) {
		this.profileImage = profileImage;
	}
	public String getTestimony() {
		return testimony;
	}
	public void setTestimony(String testimony) {
		this.testimony = testimony;
	}
	public String getArrivalDate() {
		return arrivalDate;
	}
	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	
}
