<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Product;
use Image;

 
class ProductsController extends Controller
{
 
    public function index()
    {
        return Product::all();
    }
 
    public function show(Product $product)
    {
        return $product;
    }
 
    public function store(Request $request)
#    {
#        $this->validate($request, [
#        'title' => 'required|max:255',
#        'description' => 'string',
#        'price' => 'integer',
#     #   'image' => 'mimes:jpeg,png,jpg,gif,svg|max:2048|required',
#    ]);
    {
       
        if($request->hasFile('image')){
            $product = new Product;
            $product->title = $request->title;
            $product->description = $request->description;
            $product->price = $request->price;
            $imageProduct = $request->file('image');
            $path = public_path(). '/images/';
            $filename = time() . '.' . $imageProduct->getClientOriginalExtension();
            $imageProduct->move($path, $filename);
            $product->image = $path;
            $product->save();
        }
 
        return response()->json(201);
    }
 
    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
 
        return response()->json($product, 200);
    }
 
    public function delete(Product $product)
    {
        $product->delete();
 
        return response()->json(null, 204);
    }
 
}