---
sidebar_position: 1
---

# Upload Ordnance Survey MasterMap Topography

## how to get the data
- sign up
- navigate to
- select data

## install ashtun loader

### Download loader

``` bash
git clone https://github.com/AstunTechnology/Loader.git

```

## change directory

``` bash
cd Loader
```

### install dependancies 

``` bash
sudo dnf install gdal
```

### make directories

``` bash
mkdir source temporary output
```

## prepare data

### Download MasterMap data
wget ???

### Unzip mastermap data to source directory

``` bash
unzip OS_order_6148593_OSMasterMapTopography5km_2022-12-22_1.zip -d source
```

### Remove manifest text file in source directory

``` bash
rm source/manifest.txt
```


## edit loader configuration

### backup original

``` bash
cp python/loader.config python/loader.config.bak
```

### replace line 8 source directory

``` bash
sed -i '8s/.*/src_dir=\$HOME\/Loader\/source/' python/loader.config
```

### replace line 13 temp directory

``` bash
sed -i '13s/.*/tmp_dir=\$HOME\/Loader\/temporary/' python/loader.config
```

### replace line 17 output directory

``` bash
sed -i '17s/.*/out_dir=\$HOME\/Loader\/output/' python/loader.config
```



### change line 29 database parameters

``` bash
sed -i '29s/.*/ogr_cmd=ogr2ogr --config GML_EXPOSE_FID NO -append -skipfailures -f PostgreSQL PG:\x27dbname=postgres active_schema=public host=0\.0\.0\.0 user=postgres password=postgres\x27 \$file_path/' python/loader.config
```


## run ashtun loader

### change directory

``` bash
cd python
```

### run

``` bash
python loader.py loader.config
```

## qgis style
### launch qgis
super, then type qgis, then enter

### Create new project

### Set default CRS to OSGB


### Connect to PostGIS

### connect to postgres

### add each layer to project

### download styles
``` bash
git clone https://github.com/OrdnanceSurvey/OS-Master-Map-Topography.git
```

### attach corrosponding styles to each layer

### copy symbols
cp -R osmmsymbol directory to svg directory

### copy font
cp font to font directory

### make qgis plugins work

