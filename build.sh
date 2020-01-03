#!/bin/bash

# set -o errexit -o nounset

ENTU_QUERY="_type.string=profile&props=access.string,audio.string,author.string,connection.string,crafter.string,flowers.string,geo.string,google_maps.string,idea.string,info.string,location.string,more_info.string,name.string,opening_attendee.string,opening.string,ownership.string,path.string,photo._id,photo_text.string,trivia.string" ./node_modules/entu-ssg/helpers/entu2yaml.js ./source/item/data.yaml

npm run build
cp -r ./assets/ ./build/assets
