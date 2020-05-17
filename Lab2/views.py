from .models import Library
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.response import Response 

def client(request):
    return render(request,"rest_client.html")
def librarys(request):
    return render(request,"librarys.html")
def index(request):
    return render(request,"index.html")
def books(request):
    return render(request,"books.html")

class LibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Library
        fields = ('code', 'book', 'rating', 'status')


@api_view(['GET','POST'])
def list_librarys(request):
    if request.method == "GET":
       librarys = Library.objects.all()
       serializer = LibrarySerializer(librarys, many=True)
       return Response(serializer.data)
    else:  # Post
        serializer = LibrarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)  

        return Response(serializer.errors, status=400)  


@api_view(['GET','DELETE'])
def library_details(request, code):
    try:
        library = Library.objects.get(code=code)
    except:
        return Response(status=404)

    if request.method == 'GET':
        serializer = LibrarySerializer(library)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        library.delete()
        return Response(status=204)




