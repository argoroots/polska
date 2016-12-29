#!/bin/bash

npm install entu-cms

rm -r ./tmp
mkdir ./tmp
cp -r ./source/* ./tmp

ENTU_URL=https://poola.entu.ee \
OUT_DIR=./tmp E_DEF=profile \
TEMPLATE=./source/list-index.jade \
DATA_LIST=./tmp/entities.yaml \
./node_modules/entu-cms/helpers/entu2yaml.js && \
rm -r ./docs && \
./node_modules/entu-cms/build.js ./config.yaml
