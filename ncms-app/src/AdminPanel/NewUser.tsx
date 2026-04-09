

export default function NewUser(){
    return (
        <form>
            <div className="input-row">
                <label htmlFor="UserEmail">Email</label>
                <input type="email" name="UserEmail" id="UserEmail" placeholder='Enter Your Gmail or Email...' />
            </div>
            <div className="input-row">
                <label htmlFor="UserPassword">Password</label>
                <input type="password" name="UserPassword" id="UserPassword" placeholder='Enter Your Password...' />
            </div>
            <div className="input-row">
                <label htmlFor="UserEmail">Role</label>
                <select name="UserRole" id="">
                    <option value="" disable>Select User Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Class">Class</option>
                    <option value="Student">Student</option>
                    <option value="Wing">Wing</option>
                </select>
            </div>
            <button type="submit">Create!</button>
        </form>
    )
}