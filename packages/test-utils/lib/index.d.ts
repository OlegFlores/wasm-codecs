/// <reference types="node" />
import { OutputInfo, Metadata } from 'sharp';
/**
 * Cleans up after the test
 */
export declare const cleanup: (force?: boolean) => void;
/**
 * Initializes the test utils
 *
 * @param {string} nextBasePath Base path of the tests
 */
export declare const initTestUtils: (nextBasePath: string) => void;
/**
 * Load image data from a file
 *
 * @param {string} fileName Image file name
 * @returns {Promise<{ data: Buffer; info: OutputInfo }>} Image data
 */
export declare const getImage: (fileName: string) => Promise<{
    data: Buffer;
    info: OutputInfo;
}>;
/**
 * Load image data from a file without sharp
 *
 * @param {string} fileName Image file name
 * @returns {Buffer} Image data
 */
export declare const getImageFile: (fileName: string) => Buffer;
/**
 * Load raw image data from a file
 *
 * @param {string} fileName Image file name
 * @returns {Promise<{ data: Buffer; info: OutputInfo }} Raw image data
 */
export declare const getRawImage: (fileName: string) => Promise<{
    data: Buffer;
    info: OutputInfo;
}>;
/**
 * Load image metadata
 *
 * @param {string} fileName Image file name
 * @returns {Promise<Metadata>} Image metadata
 */
export declare const getImageMetadata: (fileName: string) => Promise<Metadata>;
/**
 * Returns the size in bytes of a file
 *
 * @param {string} fileName File name
 * @returns {number} File size in bytes
 */
export declare const getFileSize: (fileName: string) => number;
/**
 * Writes a buffer into a temporary file
 *
 * @param {Buffer} data Buffer to write
 * @param {string} fileName File name
 * @returns {string} Path of the temporary file
 */
export declare const writeTmpBuffer: (data: Buffer, fileName: string) => string;
