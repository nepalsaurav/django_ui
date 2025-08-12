from django import template
from django.templatetags.static import static
from django.utils.safestring import mark_safe

register = template.Library()

@register.simple_tag
def django_ui_css():
    css_links = f'<link rel="stylesheet" href="{static("css/index.css")}">'
    return mark_safe(css_links)


@register.simple_tag
def django_ui_js():
    js_link = f'<script src="{static("js/index.js")}"></script>'
    return mark_safe(js_link)
