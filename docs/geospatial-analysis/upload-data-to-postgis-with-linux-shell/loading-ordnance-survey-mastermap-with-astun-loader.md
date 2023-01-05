---
sidebar_position: 4
---

# Loading Ordnance Survey MasterMap with astun loader


## To do
- Setup loader in pod?

### Install astun loader

Download loader

``` bash
git clone https://github.com/AstunTechnology/Loader.git

```

### Change directory

``` bash
cd Loader
```

Install dependancies 

``` bash
sudo dnf install gdal
```

make directories

``` bash
mkdir source temporary output
```

### Prepare data

Download MasterMap data

wget ???

Unzip mastermap data to source directory

``` bash
unzip OS_order_6148593_OSMasterMapTopography5km_2022-12-22_1.zip -d source
```

Remove manifest text file in source directory

``` bash
rm source/manifest.txt
```

### Edit loader configuration

Backup original

``` bash
cp python/loader.config python/loader.config.bak
```

Replace line 8 source directory

``` bash
sed -i '8s/.*/src_dir=\$HOME\/Loader\/source/' python/loader.config
```

Replace line 13 temp directory

``` bash
sed -i '13s/.*/tmp_dir=\$HOME\/Loader\/temporary/' python/loader.config
```

Replace line 17 output directory

``` bash
sed -i '17s/.*/out_dir=\$HOME\/Loader\/output/' python/loader.config
```

Change line 29 database parameters

``` bash
sed -i '29s/.*/ogr_cmd=ogr2ogr --config GML_EXPOSE_FID NO -append -skipfailures -f PostgreSQL PG:\x27dbname=postgres active_schema=public host=0\.0\.0\.0 user=postgres password=postgres\x27 \$file_path/' python/loader.config
```

### Run ashtun loader

Change directory

``` bash
cd python
```





Run

``` bash
python loader.py loader.config
```

### Qgis style

Launch qgis

> super, then type qgis, then enter

Create new project

Set default CRS to OSGB

Connect to PostGIS

connect to postgres

Add each layer to project

Download styles

``` bash
git clone https://github.com/OrdnanceSurvey/OS-Master-Map-Topography.git
```

Attach corrosponding styles to each layer

Copy symbols

``` bash
cp -R osmmsymbol $directory $svgdirectory
```

Copy font

``` bash
cp font to font directory
```

Make Qgis plugins work



## References
