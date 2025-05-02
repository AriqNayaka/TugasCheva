<?php

namespace App\Http\Controllers;

use App\Models\mahasiswa;
use Illuminate\Http\Request;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(mahasiswa::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'npm' => 'required',
            'nama' => 'required',
            'jurusan' => 'required',
            'tahun_masuk' => 'required|date',
            'kelas' => 'required'
        ]);

        $mahasiswa = mahasiswa::create([
            'npm' => $request->npm,
            'nama' => $request->nama,
            'jurusan' => $request->jurusan,
            'tahun_masuk' => $request->tahun_masuk,
            'kelas' => $request->kelas
        ]);
        return response()->json($mahasiswa, 201);
    }


    public function show(string $id)
    {
        $mahasiswa = mahasiswa::find($id);
        if ($mahasiswa) {
            return response()->json($mahasiswa, 200);
        } else {
            return response()->json(['message' => 'Mahasiswa not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $mahasiswa = mahasiswa::find($id);
        if (!$mahasiswa) {
            return response()->json(['message' => 'Mahasiswa not found'], 404);
        }

        $request->validate([
            'npm' => 'required',
            'nama' => 'required',
            'jurusan' => 'required',
            'tahun_masuk' => 'required|date',
            'kelas' => 'required'
        ]);

        // $mahasiswa = mahasiswa::updated([
        //     'npm' => $request->npm,
        //     'nama' => $request->nama,
        //     'jurusan' => $request->jurusan,
        //     'tahun_masuk' => $request->tahun_masuk,
        //     'kelas' => $request->kelas
        // ]);

        $mahasiswa->update($request->all());
        return response()->json($mahasiswa, 200);
        // return response()->json($request->all(), 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $mahasiswa = mahasiswa::find($id);
        if (!$mahasiswa) {
            return response()->json(['message' => 'Mahasiswa not found'], 404);
        }

        $mahasiswa->delete();
        return response()->json(['message' => 'Mahasiswa deleted successfully'], 200);
    }
}
