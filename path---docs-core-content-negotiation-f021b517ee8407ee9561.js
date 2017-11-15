webpackJsonp([0x5b4bf1e0d0d8],{390:function(n,a){n.exports={data:{post:{html:'<h1 id="content-negotiation"><a href="#content-negotiation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Content Negotiation</h1>\n<p>The API system has builtin <a href="https://en.wikipedia.org/wiki/Content_negotiation" target="_blank" rel="nofollow noopener noreferrer">content negotiation</a> capabilities.\nIt leverages the <a href="https://github.com/willdurand/Negotiation" target="_blank" rel="nofollow noopener noreferrer"><code>willdurand/negotiation</code></a> library.</p>\n<p>By default, only the <a href="https://json-ld.org" target="_blank" rel="nofollow noopener noreferrer">JSON-LD</a> format is enabled. However API Platform Core supports many more formats and can be extended.</p>\n<p>The framework natively supports JSON-LD, HAL, raw JSON, XML, YAML and CSV (YAML and CSV support is only available if you use Symfony 3.2+).</p>\n<p>Both XML and JSON formats are experimental and there are no assurance that we will not break them.</p>\n<p>API Platform Core will automatically detect the best resolving format depending on:</p>\n<ul>\n<li>enabled formats (see below)</li>\n<li>the requested format, specified in either the <code>Accept</code> HTTP header or as an extension appended to the URL</li>\n</ul>\n<p>Available formats are:</p>\n<table>\n<thead>\n<tr>\n<th>Format</th>\n<th>Format name</th>\n<th>MIME types</th>\n<th>Backward Compatibility guaranteed</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href="https://json-ld.org" target="_blank" rel="nofollow noopener noreferrer">JSON-LD</a></td>\n<td><code>jsonld</code></td>\n<td><code>application/ld+json</code></td>\n<td>yes</td>\n</tr>\n<tr>\n<td><a href="http://stateless.co/hal_specification.html" target="_blank" rel="nofollow noopener noreferrer">HAL</a></td>\n<td><code>jsonhal</code></td>\n<td><code>application/hal+json</code></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>JSON</td>\n<td><code>json</code></td>\n<td><code>application/json</code></td>\n<td>no</td>\n</tr>\n<tr>\n<td>XML</td>\n<td><code>xml</code></td>\n<td><code>application/xml</code>\n, \n<code>text/xml</code></td>\n<td>no</td>\n</tr>\n<tr>\n<td>HTML (API docs)</td>\n<td><code>html</code></td>\n<td><code>text/html</code></td>\n<td>no</td>\n</tr>\n</tbody>\n</table>\n<p>If the client requested format is not specified (if it\'s not supported, it will throw an HTTP bad format error), the response format will be the first format defined in the <code>formats</code> configuration key (see below).\nAn example using the builtin XML support is available in <a href="https://github.com/api-platform/core/blob/master/features/main/content_negotiation.feature" target="_blank" rel="nofollow noopener noreferrer">Behat specs</a>.</p>\n<p>The API Platform content negotiation system is extensible. Support for other formats (such as <a href="http://jsonapi.org/" target="_blank" rel="nofollow noopener noreferrer">JSONAPI</a>)\ncan be added by <a href="https://symfony.com/doc/current/serializer.html#adding-normalizers-and-encoders" target="_blank" rel="nofollow noopener noreferrer">creating and registering appropriate encoders and, sometimes, normalizers</a>. Adding support for other\nstandard hypermedia formats upstream is very welcome. Don\'t hesitate to contribute by adding your encoders and normalizers\nto API Platform Core.</p>\n<h2 id="enabling-several-formats"><a href="#enabling-several-formats" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling Several Formats</h2>\n<p>The first required step is to configure allowed formats. The following configuration will enable the support of XML (built-in)\nand of a custom format called <code>myformat</code> and having <code>application/vnd.myformat</code> as <a href="https://en.wikipedia.org/wiki/Media_type" target="_blank" rel="nofollow noopener noreferrer">MIME type</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/config.yml</span>\n<span class="token key atrule">api_platform</span><span class="token punctuation">:</span>\n    <span class="token comment"># ...</span>\n\n    <span class="token key atrule">formats</span><span class="token punctuation">:</span>\n        <span class="token key atrule">jsonld</span><span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token string">&apos;application/ld+json&apos;</span><span class="token punctuation">]</span>\n        <span class="token key atrule">jsonhal</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&apos;application/hal+json&apos;</span><span class="token punctuation">]</span>\n        <span class="token key atrule">json</span><span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token string">&apos;application/json&apos;</span><span class="token punctuation">]</span>\n        <span class="token key atrule">xml</span><span class="token punctuation">:</span>      <span class="token punctuation">[</span><span class="token string">&apos;application/xml&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;text/xml&apos;</span><span class="token punctuation">]</span>\n        <span class="token key atrule">html</span><span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token string">&apos;text/html&apos;</span><span class="token punctuation">]</span>\n        <span class="token key atrule">myformat</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&apos;application/vnd.myformat&apos;</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Because the Symfony Serializer component is able to serialize objects in XML, sending an <code>Accept</code> HTTP header with the\n<code>text/xml</code> string as value is enough to retrieve XML documents from our API. However API Platform knows nothing about the\n<code>myformat</code> format. We need to register an encoder and optionally a normalizer for this format.</p>\n<h2 id="registering-a-custom-serializer"><a href="#registering-a-custom-serializer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Registering a Custom Serializer</h2>\n<p>If you are adding support for a format not supported by default by API Platform nor by the Symfony Serializer Component,\nyou need to create custom encoder, decoder and eventually a normalizer and a denormalizer. Refer to the\nSymfony documentation to learn <a href="https://symfony.com/doc/current/cookbook/serializer.html#adding-normalizers-and-encoders" target="_blank" rel="nofollow noopener noreferrer">how to create and register such classes</a>.</p>\n<p>API Platform Core will automatically call the serializer with your defined format name (<code>myformat</code> in previous examples)\nas <code>format</code> parameter during the deserialization process. Then it will return the result to the client with the asked MIME\ntype using its built-in responder.</p>\n<h2 id="writing-a-custom-normalizer"><a href="#writing-a-custom-normalizer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing a Custom Normalizer</h2>\n<p>Using composition is the recommended way to implement a custom normalizer. You can use the following template to start with your\nown implementation of <code>CustomItemNormalizer</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/services.yml</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n<span class="token comment"># ...</span>\n\n    <span class="token key atrule">&apos;AppBundle\\Serializer\\CustomItemNormalizer&apos;</span><span class="token punctuation">:</span>\n        <span class="token key atrule">arguments</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&apos;@api_platform.serializer.normalizer.item&apos;</span> <span class="token punctuation">]</span>\n        <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&apos;serializer.normalizer&apos;</span> <span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Serializer/CustomItemNormalizer.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Serializer</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Serializer<span class="token punctuation">\\</span>Normalizer<span class="token punctuation">\\</span>DenormalizerInterface</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Serializer<span class="token punctuation">\\</span>Normalizer<span class="token punctuation">\\</span>NormalizerInterface</span><span class="token punctuation">;</span>\n\n<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">CustomItemNormalizer</span> <span class="token keyword">implements</span> <span class="token class-name">NormalizerInterface</span><span class="token punctuation">,</span> DenormalizerInterface\n<span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token variable">$normalizer</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span>NormalizerInterface <span class="token variable">$normalizer</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$normalizer</span> <span class="token keyword">instanceof</span> <span class="token class-name">DenormalizerInterface</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token punctuation">\\</span>InvalidArgumentException</span><span class="token punctuation">(</span><span class="token string">&apos;The normalizer must implement the DenormalizerInterface&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">normalizer</span> <span class="token operator">=</span> <span class="token variable">$normalizer</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">denormalize</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$class</span><span class="token punctuation">,</span> <span class="token variable">$format</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">array</span> <span class="token variable">$context</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">normalizer</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">denormalize</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$class</span><span class="token punctuation">,</span> <span class="token variable">$format</span><span class="token punctuation">,</span> <span class="token variable">$context</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">supportsDenormalization</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$type</span><span class="token punctuation">,</span> <span class="token variable">$format</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">normalizer</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">supportsDenormalization</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$type</span><span class="token punctuation">,</span> <span class="token variable">$format</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">normalize</span><span class="token punctuation">(</span><span class="token variable">$object</span><span class="token punctuation">,</span> <span class="token variable">$format</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">array</span> <span class="token variable">$context</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">normalizer</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token variable">$object</span><span class="token punctuation">,</span> <span class="token variable">$format</span><span class="token punctuation">,</span> <span class="token variable">$context</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">supportsNormalization</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$format</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">normalizer</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">supportsNormalization</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$format</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>For example if you want to make the <code>csv</code> format work for even complex entities with a lot of hierarchy, you have to\nflatten or remove too complex relations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Serializer/CustomItemNormalizer.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Serializer</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Serializer<span class="token punctuation">\\</span>Normalizer<span class="token punctuation">\\</span>DenormalizerInterface</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Serializer<span class="token punctuation">\\</span>Normalizer<span class="token punctuation">\\</span>NormalizerInterface</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">CustomItemNormalizer</span> <span class="token keyword">implements</span> <span class="token class-name">NormalizerInterface</span><span class="token punctuation">,</span> DenormalizerInterface\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">normalize</span><span class="token punctuation">(</span><span class="token variable">$object</span><span class="token punctuation">,</span> <span class="token variable">$format</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">array</span> <span class="token variable">$context</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">normalizer</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token variable">$object</span><span class="token punctuation">,</span> <span class="token variable">$format</span><span class="token punctuation">,</span> <span class="token variable">$context</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&apos;csv&apos;</span> <span class="token operator">!==</span> <span class="token variable">$format</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">is_array</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token variable">$result</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$result</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is_array</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">array_keys</span><span class="token punctuation">(</span><span class="token function">array_keys</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">array_keys</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token function">unset</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> <span class="token variable">$result</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"embedding-relations",title:"Using Different Serialization Groups per Operation"},{id:"embedding-relations",title:"Embedding Relations"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"name-conversion",title:"Name Conversion"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"writable-entity-identifier",title:"Writable Entity Identifier"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"}]},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"}]},{id:"events",title:"The Event System",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"creating-a-custom-data-provider",title:"Custom Collection Data Provider"},{id:"returning-a-paged-collection",title:"Custom Item Data Provider"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"jwt",title:"JWT Authentification",anchors:[{id:"installing-lexikjwtauthenticationnundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swagger-open-api",title:"Documenting the Authentication Mechanism with Swagger/Open API"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"security",title:"Security",anchors:null},{id:"swagger",title:"Swagger Support",anchors:[{id:"overriding-the-swagger-documentation",title:"Overriding the Swagger documentation"},{id:"using-the-swagger-context",title:"Using the Swagger Context"}]},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Builtin HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:'Accept "application/x-www-form-urlencoded" Form Data',anchors:null},{id:"external-vocabularies",title:"Using External Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending the JSON-LD context",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null},{id:"docker",title:"Using API Platform with Docker",anchors:[{id:"services",title:"Services"},{id:"installation",title:"Installation"}]}]}},{node:{title:"Extra",path:"extra",items:[{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/content-negotiation",current:{path:"docs/core/content-negotiation",title:"The API Component - Content Negotiation"},prev:{path:"docs/core/serialization",title:"The Serialization Process",rootPath:"The API Component"},next:{path:"docs/core/validation",title:"Validation",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-content-negotiation-f021b517ee8407ee9561.js.map