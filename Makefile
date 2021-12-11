sim-prod:
	docker-compose down --remove-orphans
	docker-compose up --build --remove-orphans

s3:
	docker-compose -f docker-compose.s3.yml down --remove-orphans
	docker-compose -f docker-compose.s3.yml up --build --remove-orphans
