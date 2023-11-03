from django.db import models

class Pest(models.Model):
    farm_id = models.IntegerField(null=False) # 농장 id
    problum = models.TextField(null=True) # 문제
    photo = models.CharField(max_length=100,null=True) # 사진
    solution = models.TextField(null=True) # 해결방안
    created_at = models.DateTimeField(auto_now_add=True) # 등록일자
    updated_at = models.DateTimeField(auto_now=True) # 수정일자