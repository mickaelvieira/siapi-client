#!/bin/bash

app_file="app.js"

bin_dir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
app_dir="${bin_dir}/.."

cd ${app_dir};

if [ ! -f ${app_file} ]; then
    echo "Cannot locate ${app_file} in ${app_dir}"
    exit 1
fi

/usr/bin/node app.js