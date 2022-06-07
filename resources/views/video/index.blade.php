@extends('phobrv::adminlte3.layout')

@section('header')
    <ul>
        <li>
            @if (!isset($data['post']))
                <a href="{{ route('videogroup.index') }}" class="btn btn-default float-left">
                    <i class="fa fa-backward"></i> @lang('Back')
                </a>
            @endif
        </li>
        <li>
            <a href="#" onclick="save()" class="btn btn-primary float-left">
                <i class="fas fa-save"></i> @lang('Save & Close')
            </a>
        </li>
        <li>
            <a href="#" onclick="update()" class="btn btn-warning float-left">
                <i class="fa fa-wrench"></i> @lang('Update')
            </a>
        </li>
        <li>
            <form method="post" action="{{ route('video.updateVideoGroupSelect') }}">
                @csrf
                <table class="form" width="100%" border="0" cellspacing="1" cellpadding="1">
                    <tbody>
                        <tr>
                            <td style="text-align:center; padding-right: 10px;">
                                <div class="form-group">
                                    {{ Form::select('select', $data['arrayGroup'], isset($data['select']) ? $data['select'] : '0', ['id' => 'choose', 'class' => 'form-control']) }}
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <button id="btnSubmitFilter" class="btn btn-primary ">@lang('Filter')</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </li>
    </ul>



@endsection

@section('content')
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h4>{{ __('Add/Edit Video') }}</h4>
                </div>
                <div class="card-body">
                    <form class="form-horizontal" id="formSubmit" method="post"
                        action="{{ isset($data['post']) ? route('video.update', ['video' => $data['post']->id]) : route('video.store') }}"
                        enctype="multipart/form-data">
                        @csrf
                        @isset($data['post']) @method('put') @endisset
                        <input type="hidden" id="typeSubmit" name="typeSubmit" value="update">
                        <div class="form-group">
                            <div class="col-sm-12">
                                <label class="font16">Group</label>
                            </div>
                            @isset($data['categorys'])
                                <ul>
                                    @foreach ($data['categorys'] as $cate)
                                        <li>
                                            <input type="checkbox" name="category[]" value="{{ $cate->id }}"
                                                @if (in_array($cate->id, $data['arrayCategoryID'])) checked @endif> {{ $cate->name }}
                                        </li>
                                        @if (isset($cate->child))
                                            @foreach ($cate->child as $c)
                                                <li style="padding-left: 30px;">
                                                    <input type="checkbox" name="category[]" value="{{ $c->id }}"
                                                        @if (in_array($c->id, $data['arrayCategoryID'])) checked @endif> {{ $c->name }}
                                                </li>
                                            @endforeach
                                        @endif
                                    @endforeach
                                </ul>
                            @endisset
                        </div>
                        @include('phobrv::input.inputText', [
                            'label' => 'Id Video',
                            'key' => 'excerpt',
                            'readonly' => true,
                        ])
                        @isset($data['post'])
                            @include('phobrv::input.inputText', [
                                'label' => 'Date Create',
                                'key' => 'created_at',
								'datetime'=>true
                            ])
                            @include('phobrv::input.inputImage', [
                                'label' => 'Thumb',
                                'key' => 'thumb',
                                'width' => '300px',
                            ])
                            @include('phobrv::input.inputText', [
                                'label' => 'Title',
                                'key' => 'title',
                            ])
							@include('phobrv::input.inputTextarea', [
                                'label' => 'Content',
                                'key' => 'content',
                            ])

                            @include('phobrv::input.label',['label'=>'Seo Meta'])
                            @include('phobrv::input.inputText', [
                                'label' => 'Meta Title',
                                'key' => 'meta_title',
								'type'=>'meta'
                            ])
							@include('phobrv::input.inputText', [
                                'label' => 'Meta description',
                                'key' => 'meta_description',
								'type'=>'meta'
                            ])
							@include('phobrv::input.inputText', [
                                'label' => 'Meta keywords',
                                'key' => 'meta_keywords',
								'type'=>'meta'
                            ])
                            @endif
                            <button id="btnSubmit" style="display: none" type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4>{{ __('List Video') }}</h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                @isset($data['videos'])
                                    @foreach ($data['videos'] as $video)
                                        <tr>
                                            <td align="center" style="vertical-align: middle;">{{ $loop->index + 1 }}</td>
                                            <td width="500">
                                                <input type="hidden" name="id[]" value="{{ $video->id }}">
                                                <div class="form-group">
                                                    {{ $video->title }}
                                                    <br> <i style="color: #909090"> Create:
                                                        {{ date('Y-m-d', strtotime($video->created_at)) }}</i>
                                                </div>
                                            </td>

                                            <td align="center" style="vertical-align: middle;" width="80px">
                                                <a href="{{ route('video.edit', ['video' => $video->id]) }}">
                                                    <i class="far fa-edit" title="Edit"></i>
                                                </a>
                                                &nbsp;&nbsp;&nbsp;
                                                <a href="#"
                                                    onclick="destroy('{{ route('video.delete', ['id' => $video->id]) }}')"
                                                    style="color: red;">
                                                    <i class="fa fa-times" title="Delete"></i>
                                                </a>

                                            </td>
                                        </tr>
                                    @endforeach
                                    @endif
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        @endsection

        @section('styles')
        @endsection

        @section('scripts')
            <script type="text/javascript">
                window.onload = function() {
                    CKEDITOR.replace('content', options);
                };

                function save() {
                    $('#typeSubmit').val('save');
                    $('#btnSubmit').click();
                }

                function update() {
                    $('#typeSubmit').val('update');
                    $('#btnSubmit').click();
                }

                function destroy(url) {
                    var anwser = confirm("Bạn muốn xóa video này?");
                    if (anwser) {
                        window.location = url;
                    }
                }
            </script>
        @endsection
