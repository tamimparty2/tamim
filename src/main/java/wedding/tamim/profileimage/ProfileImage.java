package wedding.tamim.profileimage;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProfileImage {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long profileImageId;

	public long getProfileImageId() {
		return profileImageId;
	}

	public void setProfileImageId(long profileImageId) {
		this.profileImageId = profileImageId;
	}
	
	
}
