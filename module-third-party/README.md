Untuk menginisiasi project menggunakan NPM, kita harus menjalankan beberapa command untuk menginisiasinya

`npm init` atau kalau mau skip aja pake `npm init --yes` atau `npm init -y`

lalu akan terbuat/tercipta file `package.json` dimana `package.json` mengindikasikan bahwa project yang dibuat itu akan menggunakan package-package dari npm, dan juga memiliki informasi tentang project tersebut dan juga memakai package apa saja dalam project tersebut

dan akan menginstall package yang dibutuhkan oleh package yang diinstall yang ada di `package.json` lalu akan tersedia dalam folder `node_modules`

perlu diingat bahwa folder `node_modules` tidak perlu di share ke github karena orang bisa install mandiri dengan cara `npm install` dan juga 