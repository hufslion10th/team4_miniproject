# Generated by Django 4.0.5 on 2022-06-01 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0003_result_major_result_student_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='result',
            name='question6',
            field=models.CharField(choices=[('바로_잔다', '바로_잔다'), ('옆으로_잔다', '옆으로_잔다'), ('이불을_안고', '이불을_안고'), ('잠버릇이_고약', '잠버릇이_고약')], max_length=15, verbose_name='질문 6'),
        ),
    ]
