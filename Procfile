python manage.py collectstatic --noinput -c
manage.py migrate
web: gunicorn config.wsgi:application --log-file - --log-level debug