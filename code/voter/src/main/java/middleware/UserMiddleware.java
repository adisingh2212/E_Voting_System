package middleware;

import db.DatabaseManager;
import db.UserDB;
import filter.CitizienFilter;
import model.Citizen;

import java.util.List;

public class UserMiddleware {

    private UserDB userDB;

    public UserMiddleware() throws Exception{ 
        this.userDB = new UserDB();
        userDB.connectDatabase(); 
    }

    public void execute() {

        try {
            userDB.connectDatabase();
//            userDB.getSurnameFromAuthor();
//            userDB.doesCitizienExist();
            DatabaseManager.getDatabaseManager().closeConnection();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Citizen> getAllCitiziens() {
        try{

            return userDB.getCitiziens(new CitizienFilter(true)); // isFullBody = true for all records in the table
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            userDB.closeConnection();
        }
        return null;
    }

    public Citizen getCitizienById(int id) {
        try{
            CitizienFilter filter = new CitizienFilter();
            filter.setId(id);
            return userDB.getCitiziens(filter).get(0); // returns null if citizien with specified ID does not exist
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            userDB.closeConnection();
        }
        return null;
    }
    

    public List<Citizen> getCitiziensByName(String name) {
        try{
            CitizienFilter filter = new CitizienFilter();
            filter.setName(name);
            return userDB.getCitiziens(filter);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            userDB.closeConnection();
        }
        return null;
    }

    public boolean doesCitizenExist(String passId) {
        try{
            return userDB.doesCitizienExist(passId);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            userDB.closeConnection();
        }
        return false;
    }
}
