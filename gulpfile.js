const { task, src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const browser = require('browser-sync')

const HTML_PATH = 'src/*.html'
const SCSS_PATH = 'src/sass/**/*.scss'
const JS_PATH = 'src/js/**/*.js'
const CSS_OUTPUT_PATH = './dist/css'
const JS_OUTPUT_PATH = './dist/js'
const HTML_OUTPUT_PATH = './dist'

task('server', () => {
    return  browser({
        server: {
            baseDir: HTML_OUTPUT_PATH
        }
    })
})

task('html', () => {
    return src(HTML_PATH)
        .pipe(dest(HTML_OUTPUT_PATH))
        .pipe(browser.reload({stream: true}))
})

task('sass', () => {
    return src(SCSS_PATH)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest(CSS_OUTPUT_PATH))
        .pipe(browser.reload({stream: true}))
})

task('js', () => {
    return src(JS_PATH)
        .pipe(uglify())
        .pipe(dest(JS_OUTPUT_PATH))
        .pipe(browser.reload({stream: true}))
})

task('watch', () => {
    watch(HTML_PATH, task('html'))
    watch(SCSS_PATH, task('sass'))
    watch(JS_PATH, task('js'))
}) 

task('default', parallel(
    'server',
    'watch'
))
