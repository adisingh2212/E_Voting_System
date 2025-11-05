package middleware;

import db.DatabaseManager;
import db.UserDB;
import filter.CitizienFilter;
import model.Citizen;

import java.util.List;

public class UserMiddleware {

    private UserDB userDB;

    public UserMiddleware() throws Exception{ // TODO po e lej kshu iher po duhet mendu a tbohet kshu
        this.userDB = new UserDB();
        userDB.connectDatabase(); // vtm kur krijo middleware lidhet me db pstj bon veprimet
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
     // So now all of this is done so that instead of writing multiple queries, you just use the one you built?
     // This way, you don’t write extra code and have fewer chances of bugs since it’s written only once.
     // What does “written only once” exactly mean here? I didn’t fully get that part.
     // 1. You write just one query, not several.
     // 2. If there’s a bug, it’ll only be in one method — you’ll only have to fix it there.
     // Okay, I get that, but even in this case, you have just one query, but you’ll do a lot of filtering,
     // whereas in the other approach, you’d simply have multiple queries that you’d call.
     // So which is simpler and faster — to make several methods with separate query result sets and prepared statements,
     // or just one query with if conditions and filters?
     // Ah, I see now — because in that case, you’d repeat a lot of code if you wrote multiple queries.
     // But I hadn’t seen this method before, honestly, nice :p
     // Haha, this actually saves a lot of time — now I get it; the code like this needs to be seen properly, for example.

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
