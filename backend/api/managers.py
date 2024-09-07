from django.contrib.auth.base_user import BaseUserManager
from django.db import models

from .models import *


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("The given email must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)


class UserPatient(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(type=Role.PATIENT)


class UserEmployee(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(type=Role.EMPLOYEE)


class ServiceFreeManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(price=0)


class PatientCartDraftManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status=PatientCartStatus.DRAFT)


class PatientCartActiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status=PatientCartStatus.ACTIVE)


class PatientCartArchiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status=PatientCartStatus.ARCHIVE)


class PatientCartWithOutDiagnoseManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(models.Q(diagnose="") | models.Q(diagnose__isnull=True))
