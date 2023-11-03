from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100, null=False) # 품목
    kind = models.CharField(max_length=100,null=False) # 품종
    weight = models.IntegerField(default=0,null=False) # 중량
    count = models.IntegerField(default=0,null=False) # 수량
    center = models.CharField(max_length=100,null=False) # 센터
    sale_percent = models.IntegerField(null=True) # 할인률
    sale = models.BooleanField(default=False) # 특가
    price = models.IntegerField(null=False) # 가격
    photo = models.CharField(max_length=100,null=True) # 사진
    created_at = models.DateTimeField(auto_now_add=True) # 등록일자
    updated_at = models.DateTimeField(auto_now=True) # 수정일자