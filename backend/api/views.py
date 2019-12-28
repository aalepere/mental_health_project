from rest_framework import viewsets
from api.models import Therapeut
from api.serializers import TherapeutSerializer


class TherapeutViewSet(viewsets.ModelViewSet):
    """ XXX """

    queryset = Therapeut.objects.all()
    serializer_class = TherapeutSerializer
