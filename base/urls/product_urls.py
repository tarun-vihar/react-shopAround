from django.urls import path
from base.views import product_views as views




urlpatterns = [
   
   
    path('create',views.createProduct, name="create-product"),
    path('upload', views.uploadImage, name="image-upload"),
    path('<str:pk>/reviews', views.createProductReview, name="create-review"),
    path('top', views.getTopProducts, name='top-products'),
    path('delete/<str:pk>',views.deleteProduct, name="delete-product"),
    path('update/<str:pk>',views.updateProduct, name="update-product"),
    path('<str:pk>',views.getProduct, name="product"),
    path('',views.getProducts, name="products"),

]