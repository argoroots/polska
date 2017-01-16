#!/bin/bash

# set -o errexit -o nounset

npm install entu-cms

rm -r ./tmp_source
mkdir ./tmp_source
cp -r ./source/* ./tmp_source

ENTU_URL=https://poola.entu.ee \
OUT_DIR=./tmp_source \
E_DEF=profile \
TEMPLATE=./source/item.jade \
DATA_LIST=./tmp_source/entities.yaml \
./node_modules/entu-cms/helpers/entu2yaml.js && \
rm -rf ./build

./node_modules/entu-cms/build.js ./entu-cms.yaml
