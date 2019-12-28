from django.db import models

class Therapeut(models.Model):
    """ List of all registed therapeuts """

    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    specialty = models.CharField(max_length=200)
