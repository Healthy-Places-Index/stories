
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.16.1
 * Query Engine version: 8b74ad57aaf2cc6c155f382a18a8e3ba95aceb03
 */
Prisma.prismaVersion = {
  client: "2.16.1",
  engine: "8b74ad57aaf2cc6c155f382a18a8e3ba95aceb03"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  institution: 'institution',
  language: 'language',
  verified: 'verified',
  verifyId: 'verifyId',
  resetId: 'resetId',
  isAdmin: 'isAdmin',
  password: 'password',
  termsAccepted: 'termsAccepted',
  privacyAccepted: 'privacyAccepted'
});

exports.Prisma.SlideScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  description: 'description',
  order: 'order',
  size: 'size',
  longitude: 'longitude',
  latitude: 'latitude',
  zoom: 'zoom',
  bearing: 'bearing',
  pitch: 'pitch',
  selectedFeature: 'selectedFeature',
  media: 'media',
  imageTitle: 'imageTitle',
  source: 'source',
  url: 'url',
  indicatorId: 'indicatorId',
  geographyId: 'geographyId',
  projectId: 'projectId'
});

exports.Prisma.ImageScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  creator: 'creator',
  source: 'source',
  date: 'date',
  url: 'url',
  slideId: 'slideId'
});

exports.Prisma.ProjectScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  description: 'description',
  category: 'category',
  imageTitle: 'imageTitle',
  source: 'source',
  url: 'url',
  published: 'published',
  gallery: 'gallery',
  updatedAt_utc: 'updatedAt_utc',
  updatedAt_offset: 'updatedAt_offset',
  createdAt_utc: 'createdAt_utc',
  createdAt_offset: 'createdAt_offset',
  userId: 'userId'
});

exports.Prisma.TagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.GeographyScalarFieldEnum = makeEnum({
  id: 'id',
  layer: 'layer',
  title: 'title',
  ordering: 'ordering'
});

exports.Prisma.IndicatorScalarFieldEnum = makeEnum({
  id: 'id',
  varname: 'varname',
  title: 'title',
  domain: 'domain',
  year: 'year',
  source: 'source',
  url: 'url'
});

exports.Prisma.AnnotationScalarFieldEnum = makeEnum({
  id: 'id',
  feature: 'feature',
  slideId: 'slideId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Slide: 'Slide',
  Image: 'Image',
  Project: 'Project',
  Tag: 'Tag',
  Geography: 'Geography',
  Indicator: 'Indicator',
  Annotation: 'Annotation'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma-client-js/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
