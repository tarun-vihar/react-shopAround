# Generated by Django 3.2.9 on 2021-12-19 06:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='countInStock',
            field=models.CharField(blank=True, default='0', max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='numReviews',
            field=models.CharField(blank=True, default='0', max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='rating',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
