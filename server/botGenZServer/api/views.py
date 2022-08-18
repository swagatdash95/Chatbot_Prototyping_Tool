# from msilib.schema import Error
from rest_framework.response import Response
from rest_framework.decorators import api_view

from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics.pairwise import euclidean_distances
from sentence_transformers import SentenceTransformer

from django.conf import settings

from configparser import ConfigParser


# # Read config.ini file
# config_object = ConfigParser()
# config_object.read("config.ini")

# # Get the password
# userinfo = config_object["USERINFO"]
# print("Password is {}".format(userinfo["password"]))


@api_view(['GET'])
def getData(request):
    person = {'name': 'Swagat', 'age': 26}
    return Response(person)


@api_view(['POST'])
def getComparision(request):
    user_input = request.data['user_input']
    validation_options = request.data['options']
    model = SentenceTransformer('bert-base-nli-mean-tokens')
    options_embeddings = model.encode(validation_options)
    user_input_embeddings = model.encode(user_input)
    print(settings.THRESHOLD)
    c_s = cosine_similarity(
        [user_input_embeddings],
        options_embeddings
    )
    c_s_list = c_s.tolist()
    max_match = max(c_s_list[0])
    if max_match > float(settings.THRESHOLD):
        return Response(c_s_list[0].index(max(c_s_list[0])))
    else:
        return Response('No Match')
