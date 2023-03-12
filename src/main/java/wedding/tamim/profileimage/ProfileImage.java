package wedding.tamim.profileimage;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProfileImage {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int profileImageId;

	public int getProfileImageId() {
		return profileImageId;
	}

	public void setProfileImageId(int profileImageId) {
		this.profileImageId = profileImageId;
	}
	
	
}
