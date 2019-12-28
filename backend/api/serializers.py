from rest_framework import serializers
from api.models import Therapeut


class TherapeutSerializer(serializers.HyperlinkedModelSerializer):
    """ XXXX """

    class Meta:
        model = Therapeut
        fields = ["first_name", "surname", "specialty"]
