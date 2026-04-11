
'''
Main Admin Table for Only

1. Add User
2. Add Class
3. Add Student
4. Add Teacher
5. Add wings
6. 

'''
from django.db import models
from django.contrib.auth.models import User

class NCMS_USERS(models.Model):
    User_Name = models.CharField(max_length=200)
    User_Email = models.OneToOneField(User, on_delete=models.CASCADE)
    User_Password = models.CharField(max_length=250)
    User_Role = models.CharField(max_length=250)

# Create your models here.
 
class Student_Model(models.Model):
    Stn_User = models.OneToOneField(NCMS_USERS, on_delete=models.CASCADE)  # link with login user
    Student_Add_no = models.CharField(max_length=50, unique=True)
    Student_Name = models.CharField(max_length=250)
    Student_Phone = models.CharField(max_length=15)

    Student_Goal = models.CharField(max_length=250, null=True, blank=True)

    Student_Dob = models.DateField(default="2010-08-10")
    Student_Father = models.CharField(max_length=250)
    Student_Address = models.CharField(max_length=250)
    Student_Img = models.ImageField(upload_to='student_Box/')
    is_Controller = models.BooleanField(null=True, blank=True, default=False)
    
  
    def __str__(self):
        return f"{self.Student_Name}"


class NIICS_TEACHERS(models.Model):
    Teacher_Id = models.CharField(max_length=250, default="No Thing", null=True, blank=True)
    Teacher_User = models.OneToOneField(NCMS_USERS, on_delete=models.CASCADE)

    Teacher_Name = models.CharField(max_length=250)
    Teacher_Img = models.ImageField(upload_to="TeacherImg/")
    IsClassTeacher = models.BooleanField(default=False)


# Second for wing holder info model

class Wing_Model(models.Model):
    wing_user = models.OneToOneField(NCMS_USERS, on_delete=models.CASCADE)  # link with login user
    Wing_Code = models.CharField(max_length=50, unique=True)
    Wing_Name = models.CharField(max_length=250, unique=True)

    Chair_Person = models.ForeignKey(
        Student_Model, on_delete=models.CASCADE,
        related_name="chairPerson_in_wings"
    )

    Assist_Person = models.ForeignKey(
        Student_Model, on_delete=models.CASCADE,
        related_name="assistant_in_wings"
    )
    wing_logo = models.ImageField(upload_to='wing_Box/')

    Total_Registered = models.IntegerField(default=0)
    Total_ReSulted = models.IntegerField(default=0)


    def __str__(self):
        return f"{self.Wing_Name}"
    


class Gallery_Model(models.Model):
    Created_by = models.ForeignKey(
       NCMS_USERS,
        on_delete=models.CASCADE, default=None
        )
    Gallery_Title = models.CharField(max_length=300)
    Gallery_Files = models.ImageField(upload_to="Gallery/", null=True,blank=True)
    Gallery_Vedio = models.FileField(upload_to="Vedio/", null=True,blank=True)
    Gallery_Dic = models.TextField(max_length=500)

    def __str__(self):
        return f"{self.Gallery_Title}"




