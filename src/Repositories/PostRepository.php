<?php

namespace Phobrv\BrvCore\Repositories;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface PostRepository.
 *
 * @package namespace App\Repositories;
 */
interface PostRepository extends RepositoryInterface
{
    public function updateTagAndCategory($post, $arrayTagName, $arrayCategoryID);

    public function insertMeta($post, $arrayMeta);

    public function destroy($id);

    public function destroyAllLang($post_id);


    public function findChilds($id);

    public function handleSeoMeta($post, $request);

    public function getConcern($post);

  
    public function resetOrderPostByTermID($term_id);

    public function removeMeta($meta_id);
}
