from django.db import models
from product.models import Product

# Create your models here.
class Order(models.Model):
    order_number = models.AutoField(primary_key=True)
    nickname = models.CharField(max_length=45)
    product = models.ForeignKey(Product, on_delete=models.CASCADE) # product_id 
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(default=0) # 0이면 결제 전 

class Review(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE) # order
    nickname = models.CharField(max_length=45)
    content = models.TextField()
    photo = models.CharField(max_length=255)
    score = models.IntegerField()
    kind = models.IntegerField()
    regdate = models.DateTimeField(auto_now_add=True)

