<?php
namespace App\Http\Controllers\Tool;

use App\Http\Controllers\BaseController;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileController extends BaseController
{
    public function imageUpload(Request $request, $path = null)
    {
        if ($path) {
            $storage_path = $path .'/'.date('Y').'/'.date('m') . '/'.date('d');
        } else {
            $storage_path = date('Y').'/'.date('m') . '/'.date('d') ;
        }
        $files = $request->files;
        $paths = [];
        /** @var UploadedFile $file */
        foreach ($files as $file) {
            $storage = Storage::disk('images')->putFile($storage_path, new File($file));
            $paths[] = [
                'path' => $storage,
                'url' => Storage::disk('images')->url($storage)
            ];
        }
        return $this->successResponse($paths);
    }
}
