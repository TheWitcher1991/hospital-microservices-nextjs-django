from rest_framework.permissions import BasePermission, SAFE_METHODS


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS


class IsPatient(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'П'
        

class IsEmployee(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'С'
    