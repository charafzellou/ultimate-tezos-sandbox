BCD_TAG=4.7.0
LIGO_VER=0.72.0
LIGO=docker run --platform linux/amd64 --rm -v "$(PWD)":"$(PWD)" -w "$(PWD)" ligolang/ligo:$(LIGO_VER)
PROTOCOL_OPT=--protocol nairobibox
JSON_OPT=--michelson-format json

##########################################

help:
	@echo "Please choose a specific template to initialize, as follows :"
	@echo "	make init-archetype"
	@echo "	make init-ligo"

##########################################

init-archetype: yarn-install sandbox-pull sandbox-start
	@echo "Setting up the Archetype template..."
	@rm -rf ligo-template
	@mv archetype-template/* ./
	@rm -rf archetype-template

init-ligo: yarn-install sandbox-pull sandbox-start
	@echo "Setting up the LIGO template..."
	@rm -rf archetype-template
	@mv ligo-template/* ./
	@rm -rf ligo-template
	
##########################################

yarn-install:
	@corepack enable
	@yarn install

##########################################

archetype-compile: contracts/main.mligo
	@echo "Compiling smart contract to Michelson..."
	@npm run compile

archetype-genbinding: tests/main.test.mligo
	@npm run gen-binding

archetype-test: tests/main.test.mligo
	@npm run test

archetype-deploy: scripts/main.deploy.ts
	@npm run deploy

##########################################

ligo-compile: contracts/main.mligo
	@echo "Compiling smart contract to Michelson..."
	@$(LIGO) compile contract $^ -e main $(PROTOCOL_OPT) --output-file compiled/main.tz
	@$(LIGO) compile contract $^ -e main $(PROTOCOL_OPT) $(JSON_OPT) --output-file compiled/main.json

ligo-test: tests/main.test.mligo
	@$(LIGO) run test $^

ligo-deploy: scripts/main.deploy.ts
	@npx ts-node $^

##########################################

sandbox-pull:
	@COMPOSE_PROJECT_NAME=bcdbox TAG=$(BCD_TAG) docker-compose -f docker-compose.yaml pull

sandbox-start:
	@COMPOSE_PROJECT_NAME=bcdbox TAG=$(BCD_TAG) docker-compose -f docker-compose.yaml up -d
	@echo "GUI is available at http://localhost:8000/"
	@open "http://localhost:8000/"

sandbox-stop:
	@COMPOSE_PROJECT_NAME=bcdbox TAG=$(BCD_TAG) docker-compose -f docker-compose.yaml stop

sandbox-down:
	@COMPOSE_PROJECT_NAME=bcdbox TAG=$(BCD_TAG) docker-compose -f docker-compose.yaml down