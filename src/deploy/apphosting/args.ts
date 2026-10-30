import { AppHostingSingle } from "../../firebaseConfig";
import { BuildConfig } from "../../gcp/apphosting";

export interface LocalBuild {
  buildConfig: BuildConfig;
  /** The built files to upload, relative to buildDir. */
  outputFiles: string[];
  /** The scratch copy of the project, which is deleted after the upload. */
  localBuildScratchDir: string;
  /** The folder in localBuildScratchDir that the build ran in. The upload is made from it. */
  buildDir: string;
  /** The app's folder in buildDir, with forward slashes. Empty if the app is buildDir itself. */
  rootDirectory: string;
}

export interface Context {
  backendConfigs: Record<string, AppHostingSingle>;
  backendLocations: Record<string, string>;
  backendStorageUris: Record<string, string>;
  backendLocalBuilds: Record<string, LocalBuild>;
}
