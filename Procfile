web: PORT=3000 npm start
api: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-production}
